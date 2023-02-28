import { Photos } from '@interfaces/church';

class PhotosMapper {
  toPersistence(domainPhotosEncounter: Photos) {
    const photos = domainPhotosEncounter.map(({ uri }) => {
      return {
        uri,
      };
    });

    return photos;
  }

  toDomain(persistencePhotosEncounter: Photos) {
    const photos = persistencePhotosEncounter.map(({ uri }) => {
      return {
        uri,
      };
    });

    return photos;
  }
}

export default new PhotosMapper();
