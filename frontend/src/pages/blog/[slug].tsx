import { Page } from "@/components/Page";
import { getPost, Post } from "@/lib/api";
import { Box, Chip, Container, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface PostPageProps {
  post: Post | null;
}

export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    const post = await getPost(slug);
    return { props: { post } };
  } catch (error) {
    return { notFound: true };
  }
};

const PostPage = ({ post }: PostPageProps) => {
  if (!post) {
    return (
      <Page>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h4">Post not found</Typography>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {post.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Typography variant="subtitle1" color="text.secondary">
            {post.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            •
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {new Date(post.publishedAt).toLocaleDateString("nb-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          {post.tags.map((tag: string) => (
            <Chip key={tag} label={tag} />
          ))}
        </Box>

        <Box sx={{ position: "relative", width: "100%", height: 400, mb: 4, borderRadius: 2, overflow: "hidden" }}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
          {post.content}
        </Typography>
      </Container>
    </Page>
  );
};

export default PostPage;
