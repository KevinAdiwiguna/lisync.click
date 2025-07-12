"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { startOfDay, endOfDay } from "date-fns";

export const GetTotalLink = async (): Promise<number> => {
  const session = await auth();

  if (!session?.user?.id) {
    throw Error("Unauthenticated");
  }

  const total = await prisma.shortLink.count({
    where: {
      userId: session.user.id,
    },
  });

  return total;
};

export const GetTotalClickPerDay = async (): Promise<number> => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthenticated");
  }

  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  const total = await prisma.clickLog.count({
    where: {
      clickedAt: {
        gte: todayStart,
        lte: todayEnd,
      },
      shortLink: {
        userId: session.user.id,
      },
    },
  });

  return total;
};

export const GetTotalClick = async (): Promise<number> => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthenticated");
  }

  const total = await prisma.clickLog.count({
    where: {
      shortLink: {
        userId: session.user.id,
      },
    },
  });

  return total;
};
