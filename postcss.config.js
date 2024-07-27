const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: isProduction ? { preset: 'advanced' } : false,
  },
}
