// 仮の言い訳：モック
export type ExcuseResult = {
    text: string;
};

export type GenerateExcuse = (
    context: string
) => Promise<ExcuseResult>;
export const generateExcuseMock: GenerateExcuse = async (context) => {
    return {
        text: `【モック】${context}ので少し遅れました。`,
    };
};