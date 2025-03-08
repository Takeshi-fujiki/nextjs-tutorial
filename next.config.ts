import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Partial Prerendering (=ppr)はNext.js 14 で導入された実験的な機能で、現時点で本番環境で使用することは推奨されていないため
    // falseにしておく
    // ppr: "incremental",
    ppr: false,
  },
};

export default nextConfig;
