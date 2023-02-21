import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { INews } from '@interfaces/news';
import { duel_tribes } from '@constants/img_url';
import { default_description_news } from '@constants/news';

import { InfoCard } from '../InfoCard';

type CarrouselProps = {
  news: INews[] | undefined;
  isLoading: boolean;
};

function Carrousel({ news, isLoading }: CarrouselProps) {
  const width = Dimensions.get('window').width;

  return news?.length ? (
    <Carousel
      data={news}
      loop={news.length > 1}
      width={width - 32}
      height={194}
      autoPlay={true}
      autoPlayInterval={5000}
      scrollAnimationDuration={1000}
      renderItem={({ index, item }) => (
        <InfoCard
          key={index}
          url={item.image_url}
          title={item.title}
          isLoading={isLoading}
          description={item.description}
        />
      )}
    />
  ) : (
    <InfoCard
      url={duel_tribes}
      title="Duelo das Tribos"
      isLoading={isLoading}
      description={default_description_news}
    />
  );
}

export default Carrousel;
