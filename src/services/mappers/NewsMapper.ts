class NewsMapper {
  toPersistence(domainNews: any) {
    return {
      slug: domainNews.slug,
      title: domainNews.title,
      image_url: domainNews.image_url,
    };
  }

  toDomain(persistenceNews: any) {
    return {
      slug: persistenceNews.slug,
      title: persistenceNews.title,
      image_url: persistenceNews.image_url,
    };
  }
}

export default new NewsMapper();
