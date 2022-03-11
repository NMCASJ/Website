import * as React from 'react'
import Layout from '../../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Join our mailing list</h1>
            <p>
              Submit our{' '}
              <a href="https://forms.gle/68UM5St544RL58Dv8">
                mailing list form.
              </a>
            </p>
            <h1>Membership</h1>
            <p>
              Sign up for a{' '}
              <a href="https://nmca-nm.org/membership/">NMCA membership</a>.
            </p>
            <p>
              Or{' '}
              <a href="https://forms.gle/yXuMSbu969brgEkc8">
                request a scholarship
              </a>{' '}
              to join our division.
            </p>
            <h1>Contact</h1>
            <p>
              If you have questions, or would like more information about our
              division, please contact us at{' '}
              <a href="mailto:info@nmcasj.org">info@nmcasj.org</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
