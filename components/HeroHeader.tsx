import Image from 'next/image';
import siteData from 'data/siteData';

export default function HeroHeader({ blog }: any) {
  console.log(blog?.profileUrl);
  return (
    <div className="py-16 text-center bg-gray-100">
      {blog?.profileUrl && (
        <Image
          src={blog.profileUrl}
          className="mx-auto rounded-full"
          width={96}
          height={96}
          alt="profile"
        />
      )}
      <div className="mt-4 text-3xl font-extrabold text-gray-900">
        {blog?.headerTitle}
      </div>
      <div className="max-w-2xl mx-auto mt-2 text-xl text-gray-500">
        {blog?.headerDescription}
      </div>
    </div>
  );
}
