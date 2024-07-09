import { Segmented } from 'antd';
import { BlogQuote } from '../../assets/svg-images';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchBlogList } from '../../redux/actions/blog';
import { BlogList } from '../../intefaces/pages/blog/blog.interface';
import { routeConstant } from '../../constants/routes';
import { BlogCrumb } from '../../components/common/bread-crumb/blog-crumb';
import './style.scss';

type CategoryOption = {
  label: string;
  value: string;
};
export const BlogHeader = () => {
  const navigate = useNavigate();
  const [categoryOption, setCategoryOption] = useState<CategoryOption[]>([]);
  const { categoryName = '' } = useParams<{ categoryName: string }>();

  const { data: blogList = {} } = useQuery<BlogList>({
    queryKey: ['BLOG_LIST'],
    queryFn: fetchBlogList,
  });

  useEffect(() => {
    if (blogList) {
      const optionArr: CategoryOption[] = [{ label: 'All', value: 'all' }];
      Object.keys(blogList).map((e) => {
        optionArr.push({
          label: e,
          value: e.toLowerCase(),
        });
      });
      setCategoryOption(optionArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogList]);

  return (
    <div>
      <div className="blog-title">
        <BlogQuote />
        <h1>Blogs</h1>
      </div>
      <div className="blog-tabs">
        <Segmented
          options={categoryOption}
          onChange={(value) => {
            navigate(
              `${routeConstant.app.blog.initalBlog.path}/category/${(value as string)?.toLowerCase()}`,
            );
          }}
          defaultValue={categoryName ? categoryName : 'all'}
        />
      </div>
      <div className="blog-crumb">
        <BlogCrumb />
      </div>
    </div>
  );
};
