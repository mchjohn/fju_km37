class NewsMapper {
  toPersistence(domainNews: any) {
    return {
      title: domainNews.title,
      image_url: domainNews.image_url,
      description: domainNews.description,
    };
  }

  toDomain(persistenceNews: any) {
    return {
      title: persistenceNews.title,
      image_url: persistenceNews.image_url,
      description: persistenceNews.description,
    };
  }
}

export default new NewsMapper();
