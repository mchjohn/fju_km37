import { IYouthEncounter } from '@interfaces/youth_encounter';

class YouthEncounterMapper {
  toPersistence(domainYouthEncounter: IYouthEncounter) {
    return {
      image_url: domainYouthEncounter.image_url,
      description: domainYouthEncounter.description,
      information: {
        name: domainYouthEncounter.information.name,
        day: domainYouthEncounter.information.day,
        hour: domainYouthEncounter.information.hour,
        week_day: domainYouthEncounter.information.week_day,
      },
    };
  }

  toDomain(persistenceYouthEncounter: IYouthEncounter) {
    return {
      image_url: persistenceYouthEncounter.image_url,
      description: persistenceYouthEncounter.description,
      information: {
        name: persistenceYouthEncounter.information.name,
        day: persistenceYouthEncounter.information.day,
        hour: persistenceYouthEncounter.information.hour,
        week_day: persistenceYouthEncounter.information.week_day,
      },
    };
  }
}

export default new YouthEncounterMapper();
