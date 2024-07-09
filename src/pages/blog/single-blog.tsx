import { useMutation } from '@tanstack/react-query';
import { Carousel } from 'antd';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Add any language components you need
import 'prismjs/themes/prism.css'; // You can choose different themes here
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBlogCategoryList } from '../../redux/actions/blog';
import { getImage } from '../../utils/common';
import './style.scss';
import { BlogCrumb } from '../../components/common/bread-crumb/blog-crumb';

export const SingleBlog = () => {
  const { slugName = '' } = useParams<{
    slugName: string;
  }>();
  const {
    mutate: mutatateBlogCategoryList,
    data: singleBlogCategoryList = {},
    isPending: isPendingSingleBlogCategoryList,
  } = useMutation({
    mutationKey: ['BLOG_CATEGORY_LIST'],
    mutationFn: fetchSingleBlogCategoryList,
  });

  useEffect(() => {
    mutatateBlogCategoryList(slugName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugName]);

  useEffect(() => {
    Prism.highlightAll();
  }, [singleBlogCategoryList]);

  useEffect(() => {
    if (
      singleBlogCategoryList &&
      Object.keys(singleBlogCategoryList).length > 0
    ) {
      // Set the document title
      const { title, excerpt } = singleBlogCategoryList;
      document.title = title;
      // Find or create the meta description tag
      let metaDescription = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      return () => {
        // Optional: Reset title and meta description
        document.title = 'Default Title';
        if (metaDescription) {
          metaDescription.content = '';
        }
        metaDescription.content = excerpt;
      };
    }
  }, [singleBlogCategoryList]);

  return (
    <div
      className="single-blog"
      style={{ fontSize: '20px', padding: '10px', margin: '20px' }}
    >
      <BlogCrumb />
      {isPendingSingleBlogCategoryList ? (
        <p>Loading...</p>
      ) : singleBlogCategoryList &&
        Object.keys(singleBlogCategoryList).length > 0 ? (
        <>
          <div className="main-content-blog">
            <h1 className="single-blog-title">
              {singleBlogCategoryList.title}
            </h1>
            <p>
              <b>{singleBlogCategoryList.excerpt}</b>
            </p>
            <div className="featured-image">
              <img src={getImage(singleBlogCategoryList.featuredImage[0])} />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: singleBlogCategoryList.description,
              }}
              className="description"
            />
            <div className="custom-image">
              <Carousel autoplay dotPosition={'bottom'} arrows>
                {singleBlogCategoryList?.customImage?.map(
                  (item: string, index: number) => {
                    return (
                      <div key={index}>
                        <img src={getImage(item)} alt={item} />
                      </div>
                    );
                  },
                )}
              </Carousel>
            </div>
          </div>
        </>
      ) : (
        <p>Page Not Found</p>
      )}
    </div>
  );
};
