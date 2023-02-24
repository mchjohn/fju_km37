import { Photos } from '@interfaces/church';

class YouthEncounterPhotosMapper {
  toPersistence(domainYouthPhotosEncounter: Photos) {
    const photos = domainYouthPhotosEncounter.map(({ uri }) => {
      return {
        uri,
      };
    });

    return photos;
  }

  toDomain(persistenceYouthPhotosEncounter: Photos) {
    const photos = persistenceYouthPhotosEncounter.map(({ uri }) => {
      return {
        uri,
      };
    });

    return photos;
  }
}

export default new YouthEncounterPhotosMapper();
