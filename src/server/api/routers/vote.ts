import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const voteRouter = createTRPCRouter({
  getCandidateVotes: publicProcedure
    .input(z.object({ candidateId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.vote.findMany({
        where: {
          candidateId: input.candidateId,
        },
      });
    }),
  getVotes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.vote.findMany();
  }),
  getCandidate: publicProcedure
    .input(z.object({ candidateId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.presidentialCandate.findUnique({
        where: {
          id: input.candidateId,
        },
      });
    }),
});
