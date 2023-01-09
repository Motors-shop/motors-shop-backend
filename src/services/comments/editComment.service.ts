import AppDataSource from "../../data-source";
import { Commentary } from "../../entities/commentary.entity";
import AppError from "../../errors/AppErros";

export const editCommentService = async (
  userId: string,
  commentaryId: string,
  commentary: string
): Promise<Commentary> => {
  const commentaryRepository = AppDataSource.getRepository(Commentary);

  const comment = await commentaryRepository.findOne({
    where: { id: commentaryId, user: { id: userId } },
  });
  if (!comment) throw new AppError("Commentary not found", 404);

  await commentaryRepository.update(comment.id, { commentary });

  const newCommentary = await commentaryRepository.findOneBy({
    id: comment.id,
  });

  return newCommentary!;
};
