
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const SHELL: string;
	export const COLORTERM: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WSL_DISTRO_NAME: string;
	export const NAME: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOME: string;
	export const LANG: string;
	export const WSL_INTEROP: string;
	export const LS_COLORS: string;
	export const WAYLAND_DISPLAY: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const LESSCLOSE: string;
	export const TERM: string;
	export const LESSOPEN: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const DISPLAY: string;
	export const SHLVL: string;
	export const XDG_RUNTIME_DIR: string;
	export const WSLENV: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const HOSTTYPE: string;
	export const PULSE_SERVER: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const OLDPWD: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		SHELL: string;
		COLORTERM: string;
		WSL2_GUI_APPS_ENABLED: string;
		TERM_PROGRAM_VERSION: string;
		WSL_DISTRO_NAME: string;
		NAME: string;
		PWD: string;
		LOGNAME: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOME: string;
		LANG: string;
		WSL_INTEROP: string;
		LS_COLORS: string;
		WAYLAND_DISPLAY: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		LESSCLOSE: string;
		TERM: string;
		LESSOPEN: string;
		LIBVIRT_DEFAULT_URI: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		DISPLAY: string;
		SHLVL: string;
		XDG_RUNTIME_DIR: string;
		WSLENV: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		HOSTTYPE: string;
		PULSE_SERVER: string;
		TERM_PROGRAM: string;
		VSCODE_IPC_HOOK_CLI: string;
		OLDPWD: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
