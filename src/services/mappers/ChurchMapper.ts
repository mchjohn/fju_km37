import { IChurch } from '@interfaces/church';

class NewsMapper {
  toPersistence(domainChurch: IChurch) {
    const meetings = domainChurch.meetings.map(({ day, schedules }) => {
      return {
        day: day,
        schedules: schedules,
      };
    });

    const photos = domainChurch.photos.map(({ uri }) => {
      return { uri };
    });

    return {
      photos,
      address: domainChurch.address,
      meetings: meetings,
      image_url: domainChurch.image_url,
      description: domainChurch.description,
    };
  }

  toDomain(persistenceChurch: IChurch) {
    const meetings = persistenceChurch.meetings.map(({ day, schedules }) => {
      return {
        day: day,
        schedules: schedules,
      };
    });

    const photos = persistenceChurch.photos.map(({ uri }) => {
      return { uri };
    });

    return {
      photos,
      address: persistenceChurch.address,
      meetings: meetings,
      image_url: persistenceChurch.image_url,
      description: persistenceChurch.description,
    };
  }
}

export default new NewsMapper();
