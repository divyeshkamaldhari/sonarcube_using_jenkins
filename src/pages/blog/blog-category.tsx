import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { routeConstant } from '../../constants/routes';
import { BlogData } from '../../intefaces/pages/blog/blog.interface';
import { fetchBlogCategoryList } from '../../redux/actions/blog';
import { BlogHeader } from './blog-header';
import { SingleBlogCardView } from './single-blog-card-view';
import './style.scss';
import { Spin } from 'antd';

export const BlogCategory = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();
  const {
    mutate: mutatateBlogCategoryList,
    data: blogCategoryList = [],
    isPending: isPendingBlogCategoryList,
  } = useMutation({
    mutationKey: ['BLOG_CATEGORY_LIST'],
    mutationFn: fetchBlogCategoryList,
  });

  useEffect(() => {
    mutatateBlogCategoryList(categoryName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <div style={{ fontSize: '20px', padding: '10px', margin: '20px' }}>
      {/* <BlogCrumb /> */}
      <BlogHeader />
      {isPendingBlogCategoryList ? (
        <p>
          <Spin />
        </p>
      ) : (
        <>
          <div className="main-content">
            <h2 className="category-title">{categoryName.toUpperCase()}</h2>
            <div className="content">
              {blogCategoryList.length > 0 ? (
                blogCategoryList.map((item: BlogData, index: number) => {
                  const {
                    title = '',
                    excerpt = '',
                    publishDate = '',
                    featuredImage = [],
                    category,
                    slug = '',
                  } = item;
                  return (
                    <div key={index} className="single-category-card">
                      <Link
                        to={`${routeConstant.app.blog.initalBlog.path}/${slug}`}
                      >
                        <SingleBlogCardView
                          featuredImage={featuredImage}
                          title={title}
                          excerpt={excerpt}
                          category={category}
                          publishDate={publishDate}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p>Page Not Found</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
