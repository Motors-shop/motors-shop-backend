import AppDataSource from "../../data-source";
import { Commentary } from "../../entities/commentary.entity";

export const listCommentService = async (vehicleId: string): Promise<Object[]> => {
  const commentRepo = AppDataSource.getRepository(Commentary);
  const comments = await commentRepo.find({
    where: {
      vehicle: {
        id: vehicleId,
      },
    },
    relations: {
      user: true,
    },
    order: {
      createdAt: "ASC",
    },
  });

  const formatComments = comments.map((comment) => {
    return { ...comment, user: { id: comment.user.id, name: comment.user.name } };
  });

  return formatComments;
};
