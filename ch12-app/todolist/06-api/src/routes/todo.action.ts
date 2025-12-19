import { createTodo, deleteTodo, updateTodo } from "@/api/todo";
import { redirect, type ActionFunctionArgs } from "react-router";

// react-router의 action에서 사용할 등록 함수
export async function todoCreateAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    await createTodo(formData);

    return redirect(`/todo/list`); // 페이지 이동에 사용
  } catch (err) {
    if (err instanceof Response) throw err; // errElement에서 처리할 4xx, 5xx 에러
    throw new Error(
      "일시적인 네트워크 문제가 발생했습니다. \n 잠시 후 다시 시도하세요."
    );
  }
}

// react-router의 action에서 사용할 등록 함수
export async function todoUpdateAction({
  request,
  params,
}: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    await updateTodo(params._id!, formData);

    return redirect(`/todo/list/${params._id}`);
  } catch (err) {
    if (err instanceof Response) throw err; // errElement에서 처리할 4xx, 5xx 에러
    throw new Error(
      "일시적인 네트워크 문제가 발생했습니다. \n 잠시 후 다시 시도하세요."
    );
  }
}

// react-router의 action에서 사용할 삭제 함수
export async function todoDeleteAction({ params }: ActionFunctionArgs) {
  try {
    return deleteTodo(params._id!);
  } catch (err) {
    if (err instanceof Response) throw err; // errElement에서 처리할 4xx, 5xx 에러
    throw new Error(
      "일시적인 네트워크 문제가 발생했습니다. \n 잠시 후 다시 시도하세요."
    );
  }
}
