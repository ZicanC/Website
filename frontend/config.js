(() => {
  const baseUrl =
    (typeof window !== 'undefined' && window.CONFIG && window.CONFIG.API_BASE_URL) ||
    (typeof process !== 'undefined' && process.env && process.env.API_BASE_URL) ||
    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:1337');
  if (typeof window !== 'undefined') {
    window.API_BASE_URL = baseUrl;
  }
  if (typeof module !== 'undefined') {
    module.exports = { API_BASE_URL: baseUrl };
  }
})();
