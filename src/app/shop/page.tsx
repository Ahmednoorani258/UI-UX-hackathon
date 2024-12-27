/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable */
// @ts-nocheck

import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import Card from "@/components/Card";
import Link from "next/link";
import { secData, type SecData } from "@/utils/dynamicpage";
import Filter from "@/components/Filter";




export default function Shop() {


  return (
    <div>
      <BreadCrumb title="Shop" url="shop" />
      
      <Filter/>
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {secData.map((cardData: SecData) => (
              <Link
                href={`/shop/${cardData.id}`}
                key={cardData.id}
                className="cursor-pointer"
              >
                <Card {...cardData} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
}


