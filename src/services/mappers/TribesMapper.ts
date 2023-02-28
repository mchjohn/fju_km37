import { ITribes } from '@interfaces/tribes';

class TribesMapper {
  toPersistence(domainTribes: ITribes[]) {
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

  toDomain(persistenceTribes: ITribes[]) {
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
