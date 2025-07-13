type Props = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  isFirst?: boolean;
};

export function TimelineEntry({ leftContent, rightContent, isFirst = false }: Props) {
  return (
    <div className={`flex justify-start ${isFirst ? 'pt-2 md:pt-10' : 'pt-10 md:pt-40'} md:gap-10`}>
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <div className="hidden md:block md:pl-20">{leftContent}</div>
      </div>
      <div className="relative pl-20 pr-4 md:pl-4 w-full max-w-[940px]">
        <div className="md:hidden block mb-4">{leftContent}</div>
        {rightContent}
      </div>
    </div>
  );
}
