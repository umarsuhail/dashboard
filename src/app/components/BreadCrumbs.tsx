'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function BreadCrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);
  const router = useRouter();

  const handleNavigate = (link: string) => {
    console.log(link);
    router.push(`/${link}`);
  };

  return (
    <div className='flex md:max-w-xs items-center rounded p-2 text-gray-700 shadow-md'>
      {pathNames.map((link, index) => {
        const isLast = index === pathNames.length - 1;

        return (
          <span key={index} className='flex items-center'>
            {!isLast ? (
              <button
                className='text-xs italic font-light'
                onClick={() => handleNavigate(link)}
              >
                <span className='mx-1'>/</span> {link}
              </button>
            ) : (
              <span className='text-xs italic font-light'>
                <span className='mx-1'>/</span> {link}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
