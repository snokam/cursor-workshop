import { Page } from "@/components/Page";
import { getPosts, Post } from "@/lib/api";
import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface BlogPageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  try {
    const posts = await getPosts();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } };
  }
};

const BlogPage = ({ posts }: BlogPageProps) => (
  <Page>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
        Artikler om utvikling, teknologi og AI
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.imageUrl}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {post.tags.map((tag: string) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: "block" }}>
                    {new Date(post.publishedAt).toLocaleDateString("nb-NO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Page>
);

export default BlogPage;
