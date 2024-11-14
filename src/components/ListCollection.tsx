import React from "react";

interface ListWithInfo {
  header: string
  info: string
}

interface ListCollectionProps {
  data: {title?: string; desc?: string; listData: string[] | ListWithInfo[]}[]
}

export const ListCollection: React.FC<ListCollectionProps> = ({ data }) => {
  return (
    <>
      {data.map((list, listIndex) => (
        <section key={listIndex} className={`${listIndex !== data.length - 1 ? 'mb-4' : ''}`}>
          {list.title  && <h3 className="text-xl font-medium text-[#8E4E3B] mb-4">{list.title}</h3>}
          {list.desc && <p className="font-semibold text-[#2B2B2B]/80 mb-4">{list.desc}</p>}
          <ul className="list-disc text-[#2B2B2B] pl-4 space-y-3">
            {list.listData.map((item, index) => (
              <li key={index} className="mb-2">
                {typeof item === "string" ? (
                  item
                ) : (
                  <>
                    {item.header && <p className="font-bold mb-1">{item.header}</p>}
                    {item.info && <p>{item.info}</p>}
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};