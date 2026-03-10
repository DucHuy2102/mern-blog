import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BlogLandingPage, BlogPostView, PostByTags, SearchPosts } from './pages/blog/components';
import {
    AdminLogin,
    Dashboard,
    BlogPosts,
    BlogPostEditor,
    Comments,
} from './pages/admin/components';
import PrivateRoute from './routes/privateRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* default routes */}
                <Route path='/' element={<BlogLandingPage />} />
                <Route path='/:slug' element={<BlogPostView />} />
                <Route path='/tag/:tagName' element={<PostByTags />} />
                <Route path='/search' element={<SearchPosts />} />

                {/* admin routes */}
                <Route element={<PrivateRoute allowedRoles={['admin']} />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/posts' element={<BlogPosts />} />
                    <Route path='/admin/create' element={<BlogPostEditor />} />
                    <Route
                        path='/admin/edit/:postSlug'
                        element={<BlogPostEditor isEdit={true} />}
                    />
                    <Route path='/admin/comments' element={<Comments />} />
                </Route>

                {/* private routes */}
                <Route path='/admin-login' element={<AdminLogin />} />
            </Routes>

            <Toaster />
        </Router>
    );
}
