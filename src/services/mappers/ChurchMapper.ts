import { IChurch } from '@interfaces/church';

class NewsMapper {
  toPersistence(domainChurch: IChurch) {
    const meetings = domainChurch.meetings.map(({ day, schedules }) => {
      return {
        day: day,
        schedules: schedules,
      };
    });

    return {
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

    return {
      address: persistenceChurch.address,
      meetings: meetings,
      image_url: persistenceChurch.image_url,
      description: persistenceChurch.description,
    };
  }
}

export default new NewsMapper();
