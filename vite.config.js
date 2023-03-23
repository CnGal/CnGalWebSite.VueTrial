import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
		}
	},
	server: {
		port: 8081
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"test-group": [
						"./src/pages/_test/_home.vue",
						"./src/pages/_test/_icon.vue",
						"./src/pages/_test/_button.vue",
						"./src/pages/_test/_list.vue",
						"./src/pages/_test/_linkbutton.vue",
						"./src/pages/_test/_iconbutton.vue",
						"./src/pages/_test/_alert.vue",
						"./src/pages/_test/_card.vue",
						"./src/pages/_test/_markdown.vue",
						"./src/pages/_test/_search.vue",
						"./src/pages/_test/_dialog.vue",
						"./src/pages/_test/_tag.vue"
					]
				}
			}
		}
	}
});
