import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import classes from './Blog.module.css';
import Meditation from '../../Images/Meditation.svg';
import Food from '../../Images/Food.svg';
import Sleep from '../../Images/Sleep.svg';
import WorkOut from '../../Images/WorkOut.svg';
import Walk from '../../Images/Walk.svg';
import Snack from '../../Images/Snack.svg';

function Blog() {

    const blogPosts = [
        {
            id: 1,
            title: 'The Benefits of Meditation: How It Can Improve Your Life',
            author: 'Sarah Johnson',
            date: 'June 5, 2021',
            content: 'Meditation is a practice that has been around for thousands of years, and for good reason. It can help you reduce stress, improve your focus, and even enhance your immune system...',
            image: Meditation,
            // tags: ['meditation', 'mindfulness', 'self-improvement']
          },
          {
            id: 2,
            title: 'The Top 10 Superfoods for a Healthy Diet',
            author: 'Mark Wilson',
            date: 'July 10, 2021',
            content: 'Eating a healthy diet is one of the best things you can do for your overall health and wellbeing. But with so many different foods out there, it can be hard to know where to start...',
            image: Food,
            // tags: ['nutrition', 'healthy eating', 'superfoods']
          },
          {
            id: 3,
            title: '5 Ways to Improve Your Sleep Quality',
            author: 'Jennifer Lee',
            date: 'August 15, 2021',
            content: 'Getting a good night\'s sleep is essential for your physical and mental health. But if you\'re struggling to sleep well, there are several things you can do to improve your sleep quality...',
            image: Sleep,
            // tags: ['sleep', 'wellness', 'self-care']
          },
          {
            id: 4,
            title: 'The Importance of Stretching: Benefits and Tips',
            author: 'David Brown',
            date: 'September 20, 2021',
            content: 'Stretching is often overlooked, but it is an important part of any fitness routine. It can help you improve your flexibility, reduce your risk of injury, and even enhance your performance...',
            image: WorkOut,
            // tags: ['fitness', 'stretching', 'workouts']
          },
          {
            id: 5,
            title: 'The Benefits of Walking: Why It\'s Good for Your Health',
            author: 'Lisa Johnson',
            date: 'October 25, 2021',
            content: 'Walking is one of the simplest and most effective forms of exercise. It can help you maintain a healthy weight, improve your cardiovascular health, and even reduce your risk of chronic diseases...',
            image: Walk,
            // tags: ['walking', 'exercise', 'health']
          },
          {
            id: 6,
            title: '5 Tips for Eating Healthy on a Budget',
            author: 'Robert Lee',
            date: 'November 30, 2021',
            content: 'Eating healthy can sometimes be expensive, but it doesn\'t have to be. With a little planning and creativity, you can enjoy nutritious meals without breaking the bank...',
            image: Snack,
            // tags: ['nutrition', 'healthy eating', 'budget-friendly']
          }
         
        ];
    

  return (
    <div>

        <NavBar />

        <h1 className={classes.heading}>Blogs</h1>

        <div className={classes['blog-align']}>
            {blogPosts.map((post) => (
                <div className={classes.blog} key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.date} by <span>{post.author}</span> </p>
                    <img src={post.image} />
                    <section>{post.content}</section>
                    <h4>{post.tags}</h4>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Blog;