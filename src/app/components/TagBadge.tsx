import React from 'react';
import { T, Tag } from '../../../data/projects';

type TagBadgeProps = {
  tag: Tag;
};

export function TagBadge({ tag }: TagBadgeProps) {
  const tagData = T[tag as Tag] || { label: tag, color: 'bg-gray-200 text-gray-800' };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mr-1 mb-1 ${tagData.color}`}
    >
      {tagData.label}
    </span>
  );
}
