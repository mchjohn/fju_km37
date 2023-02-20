class YouthEncounterMapper {
  toPersistence(domainYouthEncounter: any) {
    return {
      image_url: domainYouthEncounter.image_url,
      information: {
        name: domainYouthEncounter.information.name,
        day: domainYouthEncounter.information.day,
        hour: domainYouthEncounter.information.hour,
        week_day: domainYouthEncounter.information.week_day,
      },
    };
  }

  toDomain(persistenceYouthEncounter: any) {
    return {
      image_url: persistenceYouthEncounter.image_url,
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