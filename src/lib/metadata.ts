export const generateMetadata = (
  title = "Supreme Auto Care",
  description = "Experience Detailing That Goes Above And Beyond Your Expectations"
) => {
  const metadataConfig = {
    title,
    description,
    url: "https://www.supremeautocare.ca/",
    image: "/icon.png",
    email: "abbosdetailing@gmail.com",
  };

  return {
    
    metadataBase: new URL(metadataConfig.url),
    robots: "follow, index",
    title: metadataConfig.title,
    description: metadataConfig.description,
    openGraph: {
      title: metadataConfig.title,
      description: metadataConfig.description,
      url: metadataConfig.url,
      images: [
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
      ],
    },
    twitter: {
      title: metadataConfig.title,
      description: metadataConfig.description,
      images: [
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
      ],
    },
  };
};
