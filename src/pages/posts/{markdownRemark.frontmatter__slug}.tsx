import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomePage from "../../components/HomePage";
import PostInfo from "../../components/Nav/PostInfo";
import PageNumber from "../../components/Nav/PageNumber";
import PrevButton from "../../components/Nav/PrevButton";
import NextButton from "../../components/Nav/NextButton";
import "./{markdownRemark.frontmatter__slug}.css";

interface Post {
  node: {
    frontmatter: {
      slug: string;
      title: string;
    };
  };
}

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        slug: string;
        title: string;
        page: number;
      };
    };
    allMarkdownRemark: {
      edges: Post[];
    };
  };
}

export default function BlogPostTemplate({ data }: BlogPostTemplateProps) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { edges: posts }: { edges: Post[] } = data.allMarkdownRemark;

  console.log(posts);

  const currentIndex = posts.findIndex((p: Post) => p.node.frontmatter.slug === frontmatter.slug);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1].node : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1].node : null;

  return (
    <Layout
      page={<PageNumber page={frontmatter.page} />}
      info={
        <PostInfo
          date={frontmatter.date}
          prev={
            prevPost ? (
              <Link to={"/posts" + prevPost.frontmatter.slug}>
                <PrevButton />
              </Link>
            ) : (
              <div onClick={() => alert("첫 번째 게시물입니다.")}>
                <PrevButton />
              </div>
            )
          }
          next={
            nextPost ? (
              <Link to={"/posts" + nextPost.frontmatter.slug}>
                <NextButton />
              </Link>
            ) : (
              <div onClick={() => alert("마지막 게시물입니다.")}>
                <NextButton />
              </div>
            )
          }
        />
      }
    >
      <HomePage
        content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />}
        title={frontmatter.title}
        day={frontmatter.date}
        line={<div className="mobile-line"></div>}
        prev={
          prevPost ? (
            <Link to={"/posts" + prevPost.frontmatter.slug}>
              <div className="prev-box">
                <div className="prev-post">이전 글</div>
                <div className="prev-post-title">{prevPost.frontmatter.title}</div>
              </div>
            </Link>
          ) : (
            <div className="prev-box">
              <div className="prev-post">이전 글</div>
              <div className="prev-post-title">없음</div>
            </div>
          )
        }
        next={
          nextPost ? (
            <Link to={"/posts" + nextPost.frontmatter.slug}>
              <div className="next-box">
                <div className="next-post">다음 글</div>
                <div className="next-post-title">{nextPost.frontmatter.title}</div>
              </div>
            </Link>
          ) : (
            <div className="next-box">
              <div className="next-post">다음 글</div>
              <div className="next-post-title"> 없음</div>
            </div>
          )
        }
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        slug
        title
        page
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            page
            slug
          }
        }
      }
    }
  }
`;
