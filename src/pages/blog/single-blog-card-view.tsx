import { Card, Image } from 'antd';
import { getImage } from '../../utils/common';

type SingleBlogCardViewProps = {
  featuredImage: string[];
  title: string;
  excerpt: string;
  category: {
    name: string;
  };
  publishDate: string;
};

export const SingleBlogCardView = ({
  featuredImage,
  title,
  excerpt,
  category,
  publishDate,
}: SingleBlogCardViewProps) => {
  const { Meta } = Card;
  return (
    <>
      <Card
        hoverable
        style={{ width: 390, height: 350, overflow: 'hidden' }}
        cover={
          featuredImage[0] && (
            <Image
              alt={featuredImage[0]}
              src={getImage(featuredImage[0])}
              width={'150px'}
              height={'150px'}
            />
          )
        }
      >
        <Meta title={title} description={category?.name} />
        <p>{excerpt}</p>
        <br />
        Publish Date : {publishDate.slice(0, 10)}
      </Card>
    </>
  );
};
