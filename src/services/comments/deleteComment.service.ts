import AppDataSource from "../../data-source";
import { Commentary } from "../../entities/commentary.entity";
import AppError from "../../errors/AppErros";

export const deleteCommentService = async (
  userId: string,
  commentaryId: string
) => {
  const commentRepo = AppDataSource.getRepository(Commentary);

  const commentary = await commentRepo.findOne({
    where: { id: commentaryId, user: { id: userId } },
  });
  if (!commentary) throw new AppError("Commentary not found", 404);

  await commentRepo.delete(commentaryId);
};
