/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/Geomodels_Batch_Runner_Setup.exe',
        headers: [
          {
            key: 'Content-Length',
            value: '66566024',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
