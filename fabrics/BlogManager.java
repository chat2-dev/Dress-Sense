import java.util.ArrayList;
import java.util.List;

public class BlogManager {
    private List<Blog> blogs;

    public BlogManager() {
        this.blogs = new ArrayList<>();
    }

    public void addBlog(Blog blog) {
        blogs.add(blog);
    }

    public List<Blog> getBlogsByCategory(String category) {
        List<Blog> categoryBlogs = new ArrayList<>();
        for (Blog blog : blogs) {
            if (blog.getCategory().equalsIgnoreCase(category)) {
                categoryBlogs.add(blog);
            }
        }
        return categoryBlogs;
    }

    public List<Blog> getAllBlogs() {
        return new ArrayList<>(blogs);
    }
}

class Blog {
    private String title;
    private String content;
    private String category;
    private String date;

    public Blog(String title, String content, String category, String date) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getCategory() {
        return category;
    }

    public String getDate() {
        return date;
    }
}
