module.exports = {
	mode: "jit",
  purge: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {}
	},
  plugins: [require('daisyui')],
}