import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import type { Connect, Plugin } from "vite";

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

type SitesPluginOptions = {
  mockAuth?: boolean;
};

const MOCK_USER = {
  id: "local-dev-user",
  email: "dev@fiorebyhaydee.local",
  fullName: "Local Dev User",
};

function mockAuthMiddleware(): Connect.NextHandleFunction {
  return (req, _res, next) => {
    req.headers["oai-authenticated-user-id"] ??= MOCK_USER.id;
    req.headers["oai-authenticated-user-email"] ??= MOCK_USER.email;
    req.headers["oai-authenticated-user-full-name"] ??= encodeURIComponent(
      MOCK_USER.fullName,
    );
    req.headers["oai-authenticated-user-full-name-encoding"] ??=
      "percent-encoded-utf8";
    next();
  };
}

// Packages Sites metadata and migrations after Vite finishes compiling.
export function sites(options: SitesPluginOptions = {}): Plugin {
  const { mockAuth = false } = options;
  let root = process.cwd();

  return {
    name: "sites",
    configResolved(config) {
      root = config.root;
    },
    configureServer(server) {
      if (!mockAuth) return;

      return () => {
        server.middlewares.use(mockAuthMiddleware());
      };
    },
    apply: "build",
    async closeBundle() {
      const outputDirectory = resolve(root, "dist", ".openai");
      const hostingConfig = resolve(root, ".openai", "hosting.json");
      const drizzleSource = resolve(root, "drizzle");

      await rm(outputDirectory, { recursive: true, force: true });
      await mkdir(outputDirectory, { recursive: true });

      if (await exists(hostingConfig)) {
        await cp(hostingConfig, resolve(outputDirectory, "hosting.json"));
      }
      if (await exists(drizzleSource)) {
        await cp(drizzleSource, resolve(outputDirectory, "drizzle"), {
          recursive: true,
        });
      }
    },
  };
}
