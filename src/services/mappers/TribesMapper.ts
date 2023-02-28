import { ITribe } from '@interfaces/tribes';

class TribesMapper {
  toPersistence(domainTribes: ITribe[]) {
    const tribe = domainTribes.map(({ name, owner, points, image_url }) => {
      return {
        name,
        owner,
        points,
        image_url,
      };
    });

    return tribe;
  }

  toDomain(persistenceTribes: ITribe[]) {
    const tribe = persistenceTribes.map(
      ({ name, owner, points, image_url }) => {
        return {
          name,
          owner,
          points,
          image_url,
        };
      },
    );

    return tribe;
  }
}

export default new TribesMapper();
