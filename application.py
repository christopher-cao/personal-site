from flask import Flask, render_template, url_for
app = Flask(__name__)


@app.route('/')
@app.route('/summary')
def summary():

    return render_template('summary.html')

@app.route('/year1')
def year1():

    return render_template('year1.html')


if __name__ == '__main__':
    app.run(debug=True)