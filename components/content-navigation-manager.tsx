import React from 'react';
import StaticContentDB from '@/public/static/static-content-db.json';
import Callout from './callout';

type ContentType = {
  contentTitle: string;
  contentBody: string;
};

// Interface NavigationHandlerType ⎯ This interface is going give a constructive
// typed-interface to the useState() instance, i.e. contentNavigationHandler
// Functionining ⎯ The useState() instance is going to handle all the changes
// happening in the data flow states. Acting more like a data selection and labelling window.

interface NavigationHandlerType {
  currentContent: {
    data: ContentType;
    dataLocation?: number;
  };
  nextContent: {
    data: ContentType;
    dataLocation?: number;
  };
  previousContent: {
    data: ContentType;
    dataLocation?: number;
  };
}

interface NullStateType {
  hasPrevious: boolean;
  hasNext: boolean;
}

const ContentNavigationManager: React.FunctionComponent = () => {
  const [nullStateHandler, setNullStateHandler] = React.useState<NullStateType>(
    {
      hasPrevious: false,
      hasNext: false,
    },
  );
  const [contentNavigationHandler, setContentNavigationHandler] =
    React.useState<NavigationHandlerType>({
      currentContent: { data: { contentTitle: '', contentBody: '' } },
      nextContent: { data: { contentTitle: '', contentBody: '' } },
      previousContent: { data: { contentTitle: '', contentBody: '' } },
    });
  React.useEffect(() => {
    switch (StaticContentDB.length) {
      case 0:
        break;
      case 1:
        setContentNavigationHandler({
          ...contentNavigationHandler,
          currentContent: {
            data: {
              contentTitle: StaticContentDB[0]?.contentTitle,
              contentBody: StaticContentDB[0]?.contentBody,
            },
            dataLocation: 0,
          },
        });
        break;
      case 2:
        setContentNavigationHandler({
          ...contentNavigationHandler,
          currentContent: {
            data: {
              contentTitle: StaticContentDB[0]?.contentTitle,
              contentBody: StaticContentDB[0]?.contentBody,
            },
            dataLocation: 0,
          },
          nextContent: {
            data: {
              contentTitle: StaticContentDB[1]?.contentTitle,
              contentBody: StaticContentDB[1]?.contentBody,
            },
            dataLocation: 1,
          },
        });
        break;
      default:
        setContentNavigationHandler({
          ...contentNavigationHandler,
          currentContent: {
            data: {
              contentTitle: StaticContentDB[0]?.contentTitle,
              contentBody: StaticContentDB[0]?.contentBody,
            },
            dataLocation: 0,
          },
          nextContent: {
            data: {
              contentTitle: StaticContentDB[1]?.contentTitle,
              contentBody: StaticContentDB[1]?.contentBody,
            },
            dataLocation: 0,
          },
        });
    }
  }, []);

  // Method to manage the next action ⎯ For shifting the sliding window
  // from current dataLocation to next (dataLocation+1) if and only if
  // when the next dataLocation is available and has a slot empty for
  // new or another data allocation ⎯ based on the ContentType (type)
  const handleNextAction = function () {};

  return (
    <React.Fragment>
      <section className="content-navigation__content-body">
        {contentNavigationHandler?.currentContent?.data?.contentBody ? (
          <Callout>
            {contentNavigationHandler?.currentContent?.data?.contentBody}
          </Callout>
        ) : (
          <p className="font-normal text-gray-400 py-4 text-sm select-none cursor-default">
            No content found.
          </p>
        )}
      </section>
      <section className="content-navigation-manager flex flex-row-reverse items-start justify-between">
        {contentNavigationHandler?.nextContent?.data?.contentTitle && (
          <button
            className="p-3 rounded-md border border-gray-200 hover:bg-gray-200/10 focus:ring-2 focus:ring-blue-300 transition-all ease-in-out focus:outline-none flex flex-col items-end gap-0.5 w-[120px] truncate"
            id="next-content-button">
            <h3 className="font-medium text-base">
              {contentNavigationHandler?.nextContent?.data?.contentTitle}
            </h3>
            <p className="text-gray-500 text-sm font-normal select-none">
              {'Up next'}
            </p>
          </button>
        )}
      </section>
    </React.Fragment>
  );
};

export default ContentNavigationManager;
