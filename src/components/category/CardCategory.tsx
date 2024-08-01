import React from 'react'
import { Card, CardFooter, CardContent, CardHeader } from '../ui/card';
import { formatDate } from '@/app/blog/utils';
import Image from 'next/image';

const CardCategory = ({ title, summary, date }: { title: string; summary: string; date: string; }) => {
  return (
    <Card className="w-[550px] h-[290px] shadow-lg">
      <CardHeader>
        {title}
      </CardHeader>
      <CardContent>

        {summary}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  )
}

export default CardCategory