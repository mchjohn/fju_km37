import { Videos } from '@interfaces/tribes';

class VideosMapper {
  toPersistence(domainVideosTribes: Videos) {
    const videos = domainVideosTribes.map(({ id }) => {
      return {
        id,
      };
    });

    return videos;
  }

  toDomain(persistenceVideosTribes: Videos) {
    const videos = persistenceVideosTribes.map(({ id }) => {
      return {
        id,
      };
    });

    return videos;
  }
}

export default new VideosMapper();
