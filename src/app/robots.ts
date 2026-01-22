import { MetadataRoute } from "next";
import { appConfig } from "@/config/app";
import { seoConfig } from "@/config/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!seoConfig.enabled || !seoConfig.indexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${appConfig.url}/sitemap.xml`,
  };
}
