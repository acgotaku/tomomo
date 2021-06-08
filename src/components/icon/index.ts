import Icon from './Icon.vue';

const req = require.context('@/assets/icons', false, /\.svg$/i);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

export { Icon };
