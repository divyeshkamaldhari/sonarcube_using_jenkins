import { Link, useParams } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import './index.css';

export const BlogCrumb = () => {
  const { categoryName = '', slugName = '' } = useParams<{
    categoryName: string;
    slugName: string;
  }>();

  return (
    <>
      <ol className="breadcrumb">
        <li>
          <Link to={`${routeConstant.app.blog.initalBlog.path}`}>Blogs</Link>
        </li>
        {categoryName && (
          <li>
            <Link
              to={`${routeConstant.app.blog.initalBlog.path}/${categoryName}`}
            >
              / {categoryName}
            </Link>
          </li>
        )}
        {slugName && (
          <li>
            <Link
              to={`${routeConstant.app.blog.initalBlog.path}/${categoryName}/${slugName}`}
            >
              / {slugName}
            </Link>
          </li>
        )}
      </ol>
    </>
  );
};
