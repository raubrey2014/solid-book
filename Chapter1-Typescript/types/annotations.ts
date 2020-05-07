export const typeAnnotations = (): void => {
    const firstName = 'Ryan';

    const skills: string[] = ['python', 'javascript', 'typescript'];

    console.log(`${firstName} is familiar with ${skills.join(',')}`);
};
